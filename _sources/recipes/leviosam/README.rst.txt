:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviosam'
.. highlight: bash

leviosam
========

.. conda:recipe:: leviosam
   :replaces_section_title:
   :noindex:

   lift\-over of alignments for variant\-aware references

   :homepage: https://github.com/alshai/levioSAM
   :license: MIT
   :recipe: /`leviosam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam/meta.yaml>`_

   


.. conda:package:: leviosam

   |downloads_leviosam| |docker_leviosam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2.1-3</code>,  <code>5.2.1-2</code>,  <code>5.2.1-1</code>,  <code>5.2.1-0</code>,  <code>3.1.1-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``5.2.1-3``,  ``5.2.1-2``,  ``5.2.1-1``,  ``5.2.1-0``,  ``3.1.1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.11``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libcxx: ``>=18``
   :depends on sdsl-lite: ``>=2.1.1``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install leviosam

to add into an existing workspace instead, run::

    pixi add leviosam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install leviosam

Alternatively, to install into a new environment, run::

    conda create -n envname leviosam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/leviosam:<tag>

(see `leviosam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_leviosam| image:: https://img.shields.io/conda/dn/bioconda/leviosam.svg?style=flat
   :target: https://anaconda.org/bioconda/leviosam
   :alt:   (downloads)
.. |docker_leviosam| image:: https://quay.io/repository/biocontainers/leviosam/status
   :target: https://quay.io/repository/biocontainers/leviosam
.. _`leviosam/tags`: https://quay.io/repository/biocontainers/leviosam?tab=tags


.. raw:: html

    <script>
        var package = "leviosam";
        var versions = ["5.2.1","5.2.1","5.2.1","5.2.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviosam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviosam/README.html