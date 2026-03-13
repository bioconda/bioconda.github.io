:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenomeviz'
.. highlight: bash

pygenomeviz
===========

.. conda:recipe:: pygenomeviz
   :replaces_section_title:
   :noindex:

   A genome visualization python package for comparative genomics

   :homepage: https://github.com/moshi4/pyGenomeViz/
   :license: MIT
   :recipe: /`pygenomeviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenomeviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenomeviz/meta.yaml>`_

   


.. conda:package:: pygenomeviz

   |downloads_pygenomeviz| |docker_pygenomeviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.79``
   :depends on matplotlib-base: ``>=3.5.2``
   :depends on numpy: ``>=1.21``
   :depends on python: ``>=3.8``

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

    pixi global install pygenomeviz

to add into an existing workspace instead, run::

    pixi add pygenomeviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pygenomeviz

Alternatively, to install into a new environment, run::

    conda create -n envname pygenomeviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pygenomeviz:<tag>

(see `pygenomeviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pygenomeviz| image:: https://img.shields.io/conda/dn/bioconda/pygenomeviz.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenomeviz
   :alt:   (downloads)
.. |docker_pygenomeviz| image:: https://quay.io/repository/biocontainers/pygenomeviz/status
   :target: https://quay.io/repository/biocontainers/pygenomeviz
.. _`pygenomeviz/tags`: https://quay.io/repository/biocontainers/pygenomeviz?tab=tags


.. raw:: html

    <script>
        var package = "pygenomeviz";
        var versions = ["0.4.4","0.4.3","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenomeviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenomeviz/README.html