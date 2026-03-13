:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bolt'
.. highlight: bash

bolt
====

.. conda:recipe:: bolt
   :replaces_section_title:
   :noindex:

   A variant caller for short\-read sequencing data

   :homepage: https://github.com/sakkayaphab/bolt
   :license: MIT / MIT
   :recipe: /`bolt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt/meta.yaml>`_

   


.. conda:package:: bolt

   |downloads_bolt| |docker_bolt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-7</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.3.0-7``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libcxx: ``>=15.0.7``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on tbb: ``>=2021.9.0``
   :depends on zlib: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bolt

to add into an existing workspace instead, run::

    pixi add bolt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bolt

Alternatively, to install into a new environment, run::

    conda create -n envname bolt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bolt:<tag>

(see `bolt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bolt| image:: https://img.shields.io/conda/dn/bioconda/bolt.svg?style=flat
   :target: https://anaconda.org/bioconda/bolt
   :alt:   (downloads)
.. |docker_bolt| image:: https://quay.io/repository/biocontainers/bolt/status
   :target: https://quay.io/repository/biocontainers/bolt
.. _`bolt/tags`: https://quay.io/repository/biocontainers/bolt?tab=tags


.. raw:: html

    <script>
        var package = "bolt";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bolt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bolt/README.html