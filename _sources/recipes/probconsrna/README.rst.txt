:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probconsrna'
.. highlight: bash

probconsrna
===========

.. conda:recipe:: probconsrna
   :replaces_section_title:
   :noindex:

   PROBCONSRNA is an experimental version of PROBCONS for nucleotide sequences

   :homepage: http://probcons.stanford.edu/
   :license: Public Domain Software
   :recipe: /`probconsrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probconsrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probconsrna/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.2821705`

   


.. conda:package:: probconsrna

   |downloads_probconsrna| |docker_probconsrna|

   :versions:
      
      

      ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends libcxx: ``>=14.0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install probconsrna

   and update with::

      conda update probconsrna

   or use the docker container::

      docker pull quay.io/biocontainers/probconsrna:<tag>

   (see `probconsrna/tags`_ for valid values for ``<tag>``)


.. |downloads_probconsrna| image:: https://img.shields.io/conda/dn/bioconda/probconsrna.svg?style=flat
   :target: https://anaconda.org/bioconda/probconsrna
   :alt:   (downloads)
.. |docker_probconsrna| image:: https://quay.io/repository/biocontainers/probconsrna/status
   :target: https://quay.io/repository/biocontainers/probconsrna
.. _`probconsrna/tags`: https://quay.io/repository/biocontainers/probconsrna?tab=tags


.. raw:: html

    <script>
        var package = "probconsrna";
        var versions = ["1.10","1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probconsrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probconsrna/README.html