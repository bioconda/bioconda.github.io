:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'endorspy'
.. highlight: bash

endorspy
========

.. conda:recipe:: endorspy
   :replaces_section_title:
   :noindex:

   endorS.py calculates endogenous DNA from samtools flagstat files and print to screen

   :homepage: https://github.com/aidaanva/endorS.py
   :license: GPL-3.0
   :recipe: /`endorspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/endorspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/endorspy/meta.yaml>`_

   


.. conda:package:: endorspy

   |downloads_endorspy| |docker_endorspy|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install endorspy

   and update with::

      conda update endorspy

   or use the docker container::

      docker pull quay.io/biocontainers/endorspy:<tag>

   (see `endorspy/tags`_ for valid values for ``<tag>``)


.. |downloads_endorspy| image:: https://img.shields.io/conda/dn/bioconda/endorspy.svg?style=flat
   :target: https://anaconda.org/bioconda/endorspy
   :alt:   (downloads)
.. |docker_endorspy| image:: https://quay.io/repository/biocontainers/endorspy/status
   :target: https://quay.io/repository/biocontainers/endorspy
.. _`endorspy/tags`: https://quay.io/repository/biocontainers/endorspy?tab=tags


.. raw:: html

    <script>
        var package = "endorspy";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/endorspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/endorspy/README.html