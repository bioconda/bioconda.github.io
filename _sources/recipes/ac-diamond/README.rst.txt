:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ac-diamond'
.. highlight: bash

ac-diamond
==========

.. conda:recipe:: ac-diamond
   :replaces_section_title:
   :noindex:

   AC\-DIAMOND is a DNA\-protein alignment tool

   :homepage: https://github.com/Maihj/AC-DIAMOND
   :license: GNU Affero General Public License v3.0
   :recipe: /`ac-diamond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond/meta.yaml>`_

   


.. conda:package:: ac-diamond

   |downloads_ac-diamond| |docker_ac-diamond|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.77.0,<1.77.1.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ac-diamond

   and update with::

      conda update ac-diamond

   or use the docker container::

      docker pull quay.io/biocontainers/ac-diamond:<tag>

   (see `ac-diamond/tags`_ for valid values for ``<tag>``)


.. |downloads_ac-diamond| image:: https://img.shields.io/conda/dn/bioconda/ac-diamond.svg?style=flat
   :target: https://anaconda.org/bioconda/ac-diamond
   :alt:   (downloads)
.. |docker_ac-diamond| image:: https://quay.io/repository/biocontainers/ac-diamond/status
   :target: https://quay.io/repository/biocontainers/ac-diamond
.. _`ac-diamond/tags`: https://quay.io/repository/biocontainers/ac-diamond?tab=tags


.. raw:: html

    <script>
        var package = "ac-diamond";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ac-diamond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ac-diamond/README.html