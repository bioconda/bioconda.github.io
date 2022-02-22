:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ccube'
.. highlight: bash

r-ccube
=======

.. conda:recipe:: r-ccube
   :replaces_section_title:
   :noindex:

   R package for clustering and estimating cancer cell fractions \(CCF\) of somatic variants \(SNVs\/SVs\) from bulk whole genome\/exome data.

   :homepage: https://github.com/keyuan/ccube
   :license: GPL3 / GPL-3
   :recipe: /`r-ccube <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccube>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ccube/meta.yaml>`_

   


.. conda:package:: r-ccube

   |downloads_r-ccube| |docker_r-ccube|

   :versions:
      
      

      ``1.0_beta.1-1``,  ``1.0_beta.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libcxx: ``>=12.0.1``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-matrix: 
   :depends r-pracma: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ccube

   and update with::

      conda update r-ccube

   or use the docker container::

      docker pull quay.io/biocontainers/r-ccube:<tag>

   (see `r-ccube/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ccube| image:: https://img.shields.io/conda/dn/bioconda/r-ccube.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ccube
   :alt:   (downloads)
.. |docker_r-ccube| image:: https://quay.io/repository/biocontainers/r-ccube/status
   :target: https://quay.io/repository/biocontainers/r-ccube
.. _`r-ccube/tags`: https://quay.io/repository/biocontainers/r-ccube?tab=tags


.. raw:: html

    <script>
        var package = "r-ccube";
        var versions = ["1.0_beta.1","1.0_beta.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ccube/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ccube/README.html