:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5-research'
.. highlight: bash

fast5-research
==============

.. conda:recipe:: fast5-research
   :replaces_section_title:
   :noindex:

   ONT Research fast5 read\/write package

   :homepage: https://github.com/nanoporetech/fast5_research
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`fast5-research <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research/meta.yaml>`_

   


.. conda:package:: fast5-research

   |downloads_fast5-research| |docker_fast5-research|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.22-0</code>,  <code>1.2.20-1</code>,  <code>1.2.20-0</code>,  <code>1.2.19-0</code>,  <code>1.2.18-0</code>,  <code>1.2.17-0</code>,  <code>1.2.15-0</code>,  <code>1.2.11-0</code>,  <code>1.2.10-0</code>,  </span></summary>
      

      ``1.2.22-0``,  ``1.2.20-1``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.15-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.8-0``,  ``1.0.9-1``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on futures: 
   :depends on h5py: ``<2.9.0``
   :depends on numpy: ``>=1.14``
   :depends on progressbar2: 
   :depends on python: 

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

    pixi global install fast5-research

to add into an existing workspace instead, run::

    pixi add fast5-research

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fast5-research

Alternatively, to install into a new environment, run::

    conda create -n envname fast5-research

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fast5-research:<tag>

(see `fast5-research/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fast5-research| image:: https://img.shields.io/conda/dn/bioconda/fast5-research.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5-research
   :alt:   (downloads)
.. |docker_fast5-research| image:: https://quay.io/repository/biocontainers/fast5-research/status
   :target: https://quay.io/repository/biocontainers/fast5-research
.. _`fast5-research/tags`: https://quay.io/repository/biocontainers/fast5-research?tab=tags


.. raw:: html

    <script>
        var package = "fast5-research";
        var versions = ["1.2.22","1.2.20","1.2.20","1.2.19","1.2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5-research/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5-research/README.html