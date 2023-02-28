:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mess'
.. highlight: bash

mess
====

.. conda:recipe:: mess
   :replaces_section_title:
   :noindex:

   The Metagenomic Sequence Simulator \(MeSS\) is a snakemake workflow used for simulating metagenomic mock communities.

   :homepage: https://github.com/metagenlab/MeSS
   :license: GPL-3.0
   :recipe: /`mess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mess/meta.yaml>`_

   


.. conda:package:: mess

   |downloads_mess| |docker_mess|

   :versions:
      
      

      ``0.2.2-0``,  ``v0.2.1-0``

      

   
   :depends click: ``>=7``
   :depends pandas: ``>1``
   :depends python: ``>3.6,<3.9``
   :depends snakemake-minimal: ``6.2.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mess

   and update with::

      conda update mess

   or use the docker container::

      docker pull quay.io/biocontainers/mess:<tag>

   (see `mess/tags`_ for valid values for ``<tag>``)


.. |downloads_mess| image:: https://img.shields.io/conda/dn/bioconda/mess.svg?style=flat
   :target: https://anaconda.org/bioconda/mess
   :alt:   (downloads)
.. |docker_mess| image:: https://quay.io/repository/biocontainers/mess/status
   :target: https://quay.io/repository/biocontainers/mess
.. _`mess/tags`: https://quay.io/repository/biocontainers/mess?tab=tags


.. raw:: html

    <script>
        var package = "mess";
        var versions = ["0.2.2","v0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mess/README.html