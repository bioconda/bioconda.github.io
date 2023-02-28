:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kseqpp'
.. highlight: bash

kseqpp
======

.. conda:recipe:: kseqpp
   :replaces_section_title:
   :noindex:

   C\+\+11 re\-implementation of kseq by Heng Li

   :homepage: https://github.com/cartoonist/kseqpp
   :license: MIT / MIT
   :recipe: /`kseqpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kseqpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kseqpp/meta.yaml>`_

   The goal for re\-implementation of kseq is providing modern API and resource
   management while preserving its flexibility and performance. Like original
   kseq\, this parser is based on generic stream buffer and works with different
   file types.



.. conda:package:: kseqpp

   |downloads_kseqpp| |docker_kseqpp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kseqpp

   and update with::

      conda update kseqpp

   or use the docker container::

      docker pull quay.io/biocontainers/kseqpp:<tag>

   (see `kseqpp/tags`_ for valid values for ``<tag>``)


.. |downloads_kseqpp| image:: https://img.shields.io/conda/dn/bioconda/kseqpp.svg?style=flat
   :target: https://anaconda.org/bioconda/kseqpp
   :alt:   (downloads)
.. |docker_kseqpp| image:: https://quay.io/repository/biocontainers/kseqpp/status
   :target: https://quay.io/repository/biocontainers/kseqpp
.. _`kseqpp/tags`: https://quay.io/repository/biocontainers/kseqpp?tab=tags


.. raw:: html

    <script>
        var package = "kseqpp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kseqpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kseqpp/README.html