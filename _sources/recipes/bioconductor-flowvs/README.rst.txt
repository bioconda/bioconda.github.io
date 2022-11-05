:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowvs'
.. highlight: bash

bioconductor-flowvs
===================

.. conda:recipe:: bioconductor-flowvs
   :replaces_section_title:
   :noindex:

   Variance stabilization in flow cytometry \(and microarrays\)

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flowVS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowvs/meta.yaml>`_

   Per\-channel variance stabilization from a collection of flow cytometry samples by Bertlett test for homogeneity of variances. The approach is applicable to microarrays data as well.


.. conda:package:: bioconductor-flowvs

   |downloads_bioconductor-flowvs| |docker_bioconductor-flowvs|

   :versions:
      
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``

      

   
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends bioconductor-flowstats: ``>=4.10.0,<4.11.0``
   :depends bioconductor-flowviz: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowvs

   and update with::

      conda update bioconductor-flowvs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowvs:<tag>

   (see `bioconductor-flowvs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowvs
   :alt:   (downloads)
.. |docker_bioconductor-flowvs| image:: https://quay.io/repository/biocontainers/bioconductor-flowvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowvs
.. _`bioconductor-flowvs/tags`: https://quay.io/repository/biocontainers/bioconductor-flowvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowvs";
        var versions = ["1.30.0","1.26.0","1.24.0","1.19.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowvs/README.html