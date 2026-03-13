:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-antiprofiles'
.. highlight: bash

bioconductor-antiprofiles
=========================

.. conda:recipe:: bioconductor-antiprofiles
   :replaces_section_title:
   :noindex:

   Implementation of gene expression anti\-profiles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/antiProfiles.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-antiprofiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofiles/meta.yaml>`_
   :links: biotools: :biotools:`antiprofiles`, doi: :doi:`10.1186/1471-2105-13-272`

   Implements gene expression anti\-profiles as described in Corrada Bravo et al.\, BMC Bioinformatics 2012\, 13\:272 doi\:10.1186\/1471\-2105\-13\-272.


.. conda:package:: bioconductor-antiprofiles

   |downloads_bioconductor-antiprofiles| |docker_bioconductor-antiprofiles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-locfit: ``>=1.5``
   :depends on r-matrixstats: ``>=0.50.0``

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

    pixi global install bioconductor-antiprofiles

to add into an existing workspace instead, run::

    pixi add bioconductor-antiprofiles

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-antiprofiles

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-antiprofiles

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-antiprofiles:<tag>

(see `bioconductor-antiprofiles/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-antiprofiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-antiprofiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-antiprofiles
   :alt:   (downloads)
.. |docker_bioconductor-antiprofiles| image:: https://quay.io/repository/biocontainers/bioconductor-antiprofiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-antiprofiles
.. _`bioconductor-antiprofiles/tags`: https://quay.io/repository/biocontainers/bioconductor-antiprofiles?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-antiprofiles";
        var versions = ["1.50.0","1.46.0","1.42.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-antiprofiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-antiprofiles/README.html