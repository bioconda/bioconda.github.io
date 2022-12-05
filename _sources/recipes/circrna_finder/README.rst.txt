:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circrna_finder'
.. highlight: bash

circrna_finder
==============

.. conda:recipe:: circrna_finder
   :replaces_section_title:
   :noindex:

   Scripts required for running the pipeline to find circular RNAs from RNA\-seq data

   :homepage: https://github.com/orzechoj/circRNA_finder
   :license: MIT
   :recipe: /`circrna_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circrna_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circrna_finder/meta.yaml>`_

   


.. conda:package:: circrna_finder

   |downloads_circrna_finder| |docker_circrna_finder|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends coreutils: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circrna_finder

   and update with::

      conda update circrna_finder

   or use the docker container::

      docker pull quay.io/biocontainers/circrna_finder:<tag>

   (see `circrna_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_circrna_finder| image:: https://img.shields.io/conda/dn/bioconda/circrna_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/circrna_finder
   :alt:   (downloads)
.. |docker_circrna_finder| image:: https://quay.io/repository/biocontainers/circrna_finder/status
   :target: https://quay.io/repository/biocontainers/circrna_finder
.. _`circrna_finder/tags`: https://quay.io/repository/biocontainers/circrna_finder?tab=tags


.. raw:: html

    <script>
        var package = "circrna_finder";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circrna_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circrna_finder/README.html