:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'provean'
.. highlight: bash

provean
=======

.. conda:recipe:: provean
   :replaces_section_title:
   :noindex:

   PROVEAN \(Protein Variation Effect Analyzer\) is a software tool which predicts whether an amino acid substitution or indel has an impact on the biological function of a protein.

   :homepage: https://www.jcvi.org/research/provean
   :license: GPL / GPL-3
   :recipe: /`provean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/provean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/provean/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv195`, doi: :doi:`10.1371/journal.pone.0046688`

   


.. conda:package:: provean

   |downloads_provean| |docker_provean|

   :versions:
      
      

      ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``

      

   
   :depends blast: ``<=2.9``
   :depends cd-hit: ``4.8.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install provean

   and update with::

      conda update provean

   or use the docker container::

      docker pull quay.io/biocontainers/provean:<tag>

   (see `provean/tags`_ for valid values for ``<tag>``)


.. |downloads_provean| image:: https://img.shields.io/conda/dn/bioconda/provean.svg?style=flat
   :target: https://anaconda.org/bioconda/provean
   :alt:   (downloads)
.. |docker_provean| image:: https://quay.io/repository/biocontainers/provean/status
   :target: https://quay.io/repository/biocontainers/provean
.. _`provean/tags`: https://quay.io/repository/biocontainers/provean?tab=tags


.. raw:: html

    <script>
        var package = "provean";
        var versions = ["1.1.5","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/provean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/provean/README.html