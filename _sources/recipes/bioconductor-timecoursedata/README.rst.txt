:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timecoursedata'
.. highlight: bash

bioconductor-timecoursedata
===========================

.. conda:recipe:: bioconductor-timecoursedata
   :replaces_section_title:
   :noindex:

   A data package for timecourse RNA\-seq and microarray gene expression data sets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/timecoursedata.html
   :license: BSD 3-clause License + file LICENSE
   :recipe: /`bioconductor-timecoursedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecoursedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecoursedata/meta.yaml>`_

   This data package contains timecourse gene expression data sets. The first dataset\, from Shoemaker et al\, consists of microarray samples from lung tissue of mice exposed to different influenzy strains from 14 timepoints. The two other datasets are leaf and root samples from sorghum crops exposed to pre\- and post\-flowering drought stress and a control condition\, sampled across the plants lifetime.


.. conda:package:: bioconductor-timecoursedata

   |downloads_bioconductor-timecoursedata| |docker_bioconductor-timecoursedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-timecoursedata

to add into an existing workspace instead, run::

    pixi add bioconductor-timecoursedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-timecoursedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-timecoursedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-timecoursedata:<tag>

(see `bioconductor-timecoursedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-timecoursedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timecoursedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timecoursedata
   :alt:   (downloads)
.. |docker_bioconductor-timecoursedata| image:: https://quay.io/repository/biocontainers/bioconductor-timecoursedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timecoursedata
.. _`bioconductor-timecoursedata/tags`: https://quay.io/repository/biocontainers/bioconductor-timecoursedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timecoursedata";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timecoursedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timecoursedata/README.html