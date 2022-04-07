:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agc'
.. highlight: bash

agc
===

.. conda:recipe:: agc
   :replaces_section_title:
   :noindex:

   Assembled Genomes Compressor \(AGC\) is a tool designed to compress collections of de\-novo assembled genomes. It can be used for various types of datasets\: short genomes \(viruses\) as well as long \(humans\).

   :homepage: https://github.com/refresh-bio/agc
   :license: MIT
   :recipe: /`agc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agc/meta.yaml>`_

   


.. conda:package:: agc

   |downloads_agc| |docker_agc|

   :versions:
      
      

      ``2.0-0``,  ``1.1-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agc

   and update with::

      conda update agc

   or use the docker container::

      docker pull quay.io/biocontainers/agc:<tag>

   (see `agc/tags`_ for valid values for ``<tag>``)


.. |downloads_agc| image:: https://img.shields.io/conda/dn/bioconda/agc.svg?style=flat
   :target: https://anaconda.org/bioconda/agc
   :alt:   (downloads)
.. |docker_agc| image:: https://quay.io/repository/biocontainers/agc/status
   :target: https://quay.io/repository/biocontainers/agc
.. _`agc/tags`: https://quay.io/repository/biocontainers/agc?tab=tags


.. raw:: html

    <script>
        var package = "agc";
        var versions = ["2.0","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agc/README.html