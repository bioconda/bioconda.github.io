:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vechat'
.. highlight: bash

vechat
======

.. conda:recipe:: vechat
   :replaces_section_title:
   :noindex:

   Correcting errors in noisy long reads using variation graphs

   :homepage: https://github.com/HaploKit/vechat
   :license: GPL-3.0
   :recipe: /`vechat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vechat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vechat/meta.yaml>`_

   


.. conda:package:: vechat

   |downloads_vechat| |docker_vechat|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends fpa: ``<=0.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: 
   :depends python: 
   :depends yacrd: ``<=0.6.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vechat

   and update with::

      conda update vechat

   or use the docker container::

      docker pull quay.io/biocontainers/vechat:<tag>

   (see `vechat/tags`_ for valid values for ``<tag>``)


.. |downloads_vechat| image:: https://img.shields.io/conda/dn/bioconda/vechat.svg?style=flat
   :target: https://anaconda.org/bioconda/vechat
   :alt:   (downloads)
.. |docker_vechat| image:: https://quay.io/repository/biocontainers/vechat/status
   :target: https://quay.io/repository/biocontainers/vechat
.. _`vechat/tags`: https://quay.io/repository/biocontainers/vechat?tab=tags


.. raw:: html

    <script>
        var package = "vechat";
        var versions = ["1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vechat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vechat/README.html