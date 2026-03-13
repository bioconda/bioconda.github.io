:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recentrifuge'
.. highlight: bash

recentrifuge
============

.. conda:recipe:: recentrifuge
   :replaces_section_title:
   :noindex:

   Robust comparative analysis and contamination removal for metagenomics.

   :homepage: https://github.com/khyox/recentrifuge
   :documentation: https://github.com/khyox/recentrifuge/wiki
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`recentrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1006967`, biotools: :biotools:`Recentrifuge`, usegalaxy-eu: :usegalaxy-eu:`recentrifuge`

   


.. conda:package:: recentrifuge

   |downloads_recentrifuge| |docker_recentrifuge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-0</code>,  <code>2.0.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.15.1-0</code>,  <code>1.15.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.13.2-0</code>,  </span></summary>
      

      ``2.1.1-0``,  ``2.0.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.29.0-0``,  ``0.28.14-0``,  ``0.28.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``1.84``
   :depends on matplotlib-base: ``>=3.3.4``
   :depends on numpy: ``>=2.3.4``
   :depends on openpyxl: ``>=3.1.2``
   :depends on pandas: ``>=2.3.3``
   :depends on python: ``>=3.12``

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

    pixi global install recentrifuge

to add into an existing workspace instead, run::

    pixi add recentrifuge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install recentrifuge

Alternatively, to install into a new environment, run::

    conda create -n envname recentrifuge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/recentrifuge:<tag>

(see `recentrifuge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_recentrifuge| image:: https://img.shields.io/conda/dn/bioconda/recentrifuge.svg?style=flat
   :target: https://anaconda.org/bioconda/recentrifuge
   :alt:   (downloads)
.. |docker_recentrifuge| image:: https://quay.io/repository/biocontainers/recentrifuge/status
   :target: https://quay.io/repository/biocontainers/recentrifuge
.. _`recentrifuge/tags`: https://quay.io/repository/biocontainers/recentrifuge?tab=tags


.. raw:: html

    <script>
        var package = "recentrifuge";
        var versions = ["2.1.1","2.0.0","1.16.1","1.16.0","1.15.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recentrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recentrifuge/README.html