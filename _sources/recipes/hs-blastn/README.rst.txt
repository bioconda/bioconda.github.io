:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hs-blastn'
.. highlight: bash

hs-blastn
=========

.. conda:recipe:: hs-blastn
   :replaces_section_title:
   :noindex:

   hs\-blastn\, a fast and accurate nucleotide\-nucleotide sequences aligner.

   :homepage: https://github.com/chenying2016/queries
   :license: GPL-3.0
   :recipe: /`hs-blastn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hs-blastn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hs-blastn/meta.yaml>`_

   


.. conda:package:: hs-blastn

   |downloads_hs-blastn| |docker_hs-blastn|

   :versions:
      
      

      ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends blast: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hs-blastn

   and update with::

      conda update hs-blastn

   or use the docker container::

      docker pull quay.io/biocontainers/hs-blastn:<tag>

   (see `hs-blastn/tags`_ for valid values for ``<tag>``)


.. |downloads_hs-blastn| image:: https://img.shields.io/conda/dn/bioconda/hs-blastn.svg?style=flat
   :target: https://anaconda.org/bioconda/hs-blastn
   :alt:   (downloads)
.. |docker_hs-blastn| image:: https://quay.io/repository/biocontainers/hs-blastn/status
   :target: https://quay.io/repository/biocontainers/hs-blastn
.. _`hs-blastn/tags`: https://quay.io/repository/biocontainers/hs-blastn?tab=tags


.. raw:: html

    <script>
        var package = "hs-blastn";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hs-blastn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hs-blastn/README.html