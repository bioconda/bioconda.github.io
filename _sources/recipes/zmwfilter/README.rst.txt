:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zmwfilter'
.. highlight: bash

zmwfilter
=========

.. conda:recipe:: zmwfilter
   :replaces_section_title:
   :noindex:

   PacBio utility to filter reads on ZMW ID\(s\)

   :homepage: https://github.com/PacificBiosciences/zmwfilter
   :license: BSD-3-Clause-Clear
   :recipe: /`zmwfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zmwfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zmwfilter/meta.yaml>`_

   


.. conda:package:: zmwfilter

   |downloads_zmwfilter| |docker_zmwfilter|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends pbtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zmwfilter

   and update with::

      conda update zmwfilter

   or use the docker container::

      docker pull quay.io/biocontainers/zmwfilter:<tag>

   (see `zmwfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_zmwfilter| image:: https://img.shields.io/conda/dn/bioconda/zmwfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/zmwfilter
   :alt:   (downloads)
.. |docker_zmwfilter| image:: https://quay.io/repository/biocontainers/zmwfilter/status
   :target: https://quay.io/repository/biocontainers/zmwfilter
.. _`zmwfilter/tags`: https://quay.io/repository/biocontainers/zmwfilter?tab=tags


.. raw:: html

    <script>
        var package = "zmwfilter";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zmwfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zmwfilter/README.html