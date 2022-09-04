:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-max_inscribed_circles'
.. highlight: bash

fiji-max_inscribed_circles
==========================

.. conda:recipe:: fiji-max_inscribed_circles
   :replaces_section_title:
   :noindex:

   ImageJ \/ Fiji plugin implementing an iterative Largest Inscribed Circle algorithm using a euclidean distance map

   :homepage: https://imagej.net/plugins/max-inscribed-circles
   :developer docs: https://github.com/BIOP/ijp-max-inscribed-circles
   :license: GPLv3
   :recipe: /`fiji-max_inscribed_circles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-max_inscribed_circles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-max_inscribed_circles/meta.yaml>`_

   ImageJ \/ Fiji plugin implementing an iterative Largest Inscribed Circle algorithm
   which runs over a binary image or selection in order to fit the maximum number
   of non\-touching circles down to a minimum diameter.
   The approach uses a Euclidean Distance Map in order to find candidate circles
   from the largest to the smallest.
   The code is written for Java 8\,
   which is the currently supported Java version for Fiji and ImageJ.



.. conda:package:: fiji-max_inscribed_circles

   |downloads_fiji-max_inscribed_circles| |docker_fiji-max_inscribed_circles|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends fiji: ``>=20220414,!=h527b516_0,!=h9ee0642_0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fiji-max_inscribed_circles

   and update with::

      conda update fiji-max_inscribed_circles

   or use the docker container::

      docker pull quay.io/biocontainers/fiji-max_inscribed_circles:<tag>

   (see `fiji-max_inscribed_circles/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji-max_inscribed_circles| image:: https://img.shields.io/conda/dn/bioconda/fiji-max_inscribed_circles.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-max_inscribed_circles
   :alt:   (downloads)
.. |docker_fiji-max_inscribed_circles| image:: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles/status
   :target: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles
.. _`fiji-max_inscribed_circles/tags`: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles?tab=tags


.. raw:: html

    <script>
        var package = "fiji-max_inscribed_circles";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-max_inscribed_circles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-max_inscribed_circles/README.html