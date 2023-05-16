:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dist_est'
.. highlight: bash

dist_est
========

.. conda:recipe:: dist_est
   :replaces_section_title:
   :noindex:

   Estimation of Rates\-Across\-Sites Distributions in Phylogenetic Subsititution Models

   :homepage: https://www.mathstat.dal.ca/~tsusko/doc/ras.pdf
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`dist_est <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dist_est>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dist_est/meta.yaml>`_

   


.. conda:package:: dist_est

   |downloads_dist_est| |docker_dist_est|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=12.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dist_est

   and update with::

      conda update dist_est

   or use the docker container::

      docker pull quay.io/biocontainers/dist_est:<tag>

   (see `dist_est/tags`_ for valid values for ``<tag>``)


.. |downloads_dist_est| image:: https://img.shields.io/conda/dn/bioconda/dist_est.svg?style=flat
   :target: https://anaconda.org/bioconda/dist_est
   :alt:   (downloads)
.. |docker_dist_est| image:: https://quay.io/repository/biocontainers/dist_est/status
   :target: https://quay.io/repository/biocontainers/dist_est
.. _`dist_est/tags`: https://quay.io/repository/biocontainers/dist_est?tab=tags


.. raw:: html

    <script>
        var package = "dist_est";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dist_est/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dist_est/README.html