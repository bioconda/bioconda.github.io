:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-falcon'
.. highlight: bash

pb-falcon
=========

.. conda:recipe:: pb-falcon
   :replaces_section_title:
   :noindex:

   FALCON\/Unzip tool\-suite \(originally by Jason Chin\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon/meta.yaml>`_

   


.. conda:package:: pb-falcon

   |downloads_pb-falcon| |docker_pb-falcon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.4-7</code>,  <code>2.2.4-6</code>,  <code>2.2.4-5</code>,  <code>2.2.4-4</code>,  <code>2.2.4-3</code>,  <code>2.2.4-2</code>,  <code>2.2.4-1</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  </span></summary>
      

      ``2.2.4-7``,  ``2.2.4-6``,  ``2.2.4-5``,  ``2.2.4-4``,  ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.7-1``,  ``0.2.6-3``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on future: ``>=0.16.0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on networkx: ``>=1.9.1``
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-edlib: ``>=1.2.4``
   :depends on python-intervaltree: 
   :depends on python-msgpack: ``>=0.6.1``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install pb-falcon

to add into an existing workspace instead, run::

    pixi add pb-falcon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pb-falcon

Alternatively, to install into a new environment, run::

    conda create -n envname pb-falcon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pb-falcon:<tag>

(see `pb-falcon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pb-falcon| image:: https://img.shields.io/conda/dn/bioconda/pb-falcon.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-falcon
   :alt:   (downloads)
.. |docker_pb-falcon| image:: https://quay.io/repository/biocontainers/pb-falcon/status
   :target: https://quay.io/repository/biocontainers/pb-falcon
.. _`pb-falcon/tags`: https://quay.io/repository/biocontainers/pb-falcon?tab=tags


.. raw:: html

    <script>
        var package = "pb-falcon";
        var versions = ["2.2.4","2.2.4","2.2.4","2.2.4","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falcon/README.html