:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda-repodata-patches'
.. highlight: bash

bioconda-repodata-patches
=========================

.. conda:recipe:: bioconda-repodata-patches
   :replaces_section_title:
   :noindex:

   Generate tweaks to index metadata\, hosted separately from anaconda.org index.

   :homepage: https://github.com/bioconda/bioconda-recipes
   :license: CC-PDDC
   :recipe: /`bioconda-repodata-patches <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches/meta.yaml>`_

   


.. conda:package:: bioconda-repodata-patches

   |downloads_bioconda-repodata-patches| |docker_bioconda-repodata-patches|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20251216-0</code>,  <code>20251102-0</code>,  <code>20251031-0</code>,  <code>20250603-0</code>,  <code>20250516-0</code>,  <code>20241219-1</code>,  <code>20241219-0</code>,  <code>20240913-0</code>,  <code>20240805-0</code>,  </span></summary>
      

      ``20251216-0``,  ``20251102-0``,  ``20251031-0``,  ``20250603-0``,  ``20250516-0``,  ``20241219-1``,  ``20241219-0``,  ``20240913-0``,  ``20240805-0``,  ``20240525-0``,  ``20240416-0``,  ``20240112-0``,  ``20231213-0``,  ``20230918-1``,  ``20230918-0``,  ``20230907-0``,  ``20230506-1``,  ``20230506-0``,  ``20230428-0``,  ``20230414-0``,  ``20230313-0``,  ``20230310-0``,  ``20230228-0``,  ``20221115-0``,  ``20220921-1``,  ``20220921-0``,  ``20220803-0``,  ``20220206-0``,  ``20220205-0``,  ``20220204-0``,  ``20220203-0``,  ``20220202-0``,  ``20220201-0``,  ``20220131-0``,  ``20220130-0``,  ``20220129-0``,  ``20220128-0``,  ``20220127-0``,  ``20220126-0``,  ``20220125-0``,  ``20220124-0``,  ``20220123-0``,  ``20220122-0``,  ``20220121-0``,  ``20220120-0``,  ``20220119-0``,  ``20220118-0``,  ``20220117-0``,  ``20220116-0``,  ``20220115-0``,  ``20220114-0``,  ``20220113-0``,  ``20220112-0``,  ``20220111-0``,  ``20220110-0``,  ``20220109-0``,  ``20220108-0``,  ``20220107-0``,  ``20220106-0``,  ``20220105-0``,  ``20220104-0``,  ``20220103-0``,  ``20200205-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.14,<3.15.0a0``

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

    pixi global install bioconda-repodata-patches

to add into an existing workspace instead, run::

    pixi add bioconda-repodata-patches

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconda-repodata-patches

Alternatively, to install into a new environment, run::

    conda create -n envname bioconda-repodata-patches

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconda-repodata-patches:<tag>

(see `bioconda-repodata-patches/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconda-repodata-patches| image:: https://img.shields.io/conda/dn/bioconda/bioconda-repodata-patches.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda-repodata-patches
   :alt:   (downloads)
.. |docker_bioconda-repodata-patches| image:: https://quay.io/repository/biocontainers/bioconda-repodata-patches/status
   :target: https://quay.io/repository/biocontainers/bioconda-repodata-patches
.. _`bioconda-repodata-patches/tags`: https://quay.io/repository/biocontainers/bioconda-repodata-patches?tab=tags


.. raw:: html

    <script>
        var package = "bioconda-repodata-patches";
        var versions = ["20251216","20251102","20251031","20250603","20250516"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda-repodata-patches/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda-repodata-patches/README.html