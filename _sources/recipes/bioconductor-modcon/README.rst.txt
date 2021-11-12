:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-modcon'
.. highlight: bash

bioconductor-modcon
===================

.. conda:recipe:: bioconductor-modcon
   :replaces_section_title:
   :noindex:

   Modifying splice site usage by changing the mRNP code\, while maintaining the genetic code

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ModCon.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-modcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modcon/meta.yaml>`_

   Collection of functions to calculate a nucleotide sequence surrounding for splice donors sites to either activate or repress donor usage. The proposed alternative nucleotide sequence encodes the same amino acid and could be applied e.g. in reporter systems to silence or activate cryptic splice donor sites.


.. conda:package:: bioconductor-modcon

   |downloads_bioconductor-modcon| |docker_bioconductor-modcon|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends perl: ``>=5.32.1,<5.32.2.0a0``
   :depends perl: ``>=5.32.1,<5.32.2.0a0 *_perl5``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-modcon

   and update with::

      conda update bioconductor-modcon

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-modcon:<tag>

   (see `bioconductor-modcon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-modcon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-modcon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-modcon
   :alt:   (downloads)
.. |docker_bioconductor-modcon| image:: https://quay.io/repository/biocontainers/bioconductor-modcon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-modcon
.. _`bioconductor-modcon/tags`: https://quay.io/repository/biocontainers/bioconductor-modcon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-modcon";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-modcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-modcon/README.html