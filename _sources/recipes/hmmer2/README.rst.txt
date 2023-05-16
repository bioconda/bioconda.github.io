:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmer2'
.. highlight: bash

hmmer2
======

.. conda:recipe:: hmmer2
   :replaces_section_title:
   :noindex:

   Biosequence analysis using profile hidden Markov models

   :homepage: http://hmmer.org/
   :license: GPLv2
   :recipe: /`hmmer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer2/meta.yaml>`_

   


.. conda:package:: hmmer2

   |downloads_hmmer2| |docker_hmmer2|

   :versions:
      
      

      ``2.3.2-9``,  ``2.3.2-8``,  ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmmer2

   and update with::

      conda update hmmer2

   or use the docker container::

      docker pull quay.io/biocontainers/hmmer2:<tag>

   (see `hmmer2/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmer2| image:: https://img.shields.io/conda/dn/bioconda/hmmer2.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmer2
   :alt:   (downloads)
.. |docker_hmmer2| image:: https://quay.io/repository/biocontainers/hmmer2/status
   :target: https://quay.io/repository/biocontainers/hmmer2
.. _`hmmer2/tags`: https://quay.io/repository/biocontainers/hmmer2?tab=tags


.. raw:: html

    <script>
        var package = "hmmer2";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmer2/README.html