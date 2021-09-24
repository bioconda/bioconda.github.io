:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sonicparanoid'
.. highlight: bash

sonicparanoid
=============

.. conda:recipe:: sonicparanoid
   :replaces_section_title:
   :noindex:

   SonicParanoid\: fast\, easy and accurate orthology inference

   :homepage: http://iwasakilab.bs.s.u-tokyo.ac.jp/sonicparanoid/
   :license: GPL3 / GNU General Public License v3
   :recipe: /`sonicparanoid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sonicparanoid/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty631`

   


.. conda:package:: sonicparanoid

   |downloads_sonicparanoid| |docker_sonicparanoid|

   :versions:
      
      

      ``1.3.6-0``,  ``1.0.14-4``,  ``1.0.14-3``,  ``1.0.14-2``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``

      

   
   :depends blast: ``2.12.0``
   :depends diamond: ``2.0.11``
   :depends libcxx: ``>=11.1.0``
   :depends mcl: ``14.137``
   :depends mmseqs2: ``13.45111``
   :depends pip: ``>=21.2.4``
   :depends python: ``>=3.8,<3.9.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sonicparanoid

   and update with::

      conda update sonicparanoid

   or use the docker container::

      docker pull quay.io/biocontainers/sonicparanoid:<tag>

   (see `sonicparanoid/tags`_ for valid values for ``<tag>``)


.. |downloads_sonicparanoid| image:: https://img.shields.io/conda/dn/bioconda/sonicparanoid.svg?style=flat
   :target: https://anaconda.org/bioconda/sonicparanoid
   :alt:   (downloads)
.. |docker_sonicparanoid| image:: https://quay.io/repository/biocontainers/sonicparanoid/status
   :target: https://quay.io/repository/biocontainers/sonicparanoid
.. _`sonicparanoid/tags`: https://quay.io/repository/biocontainers/sonicparanoid?tab=tags


.. raw:: html

    <script>
        var package = "sonicparanoid";
        var versions = ["1.3.6","1.0.14","1.0.14","1.0.14","1.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sonicparanoid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sonicparanoid/README.html