:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayestyper'
.. highlight: bash

bayestyper
==========

.. conda:recipe:: bayestyper
   :replaces_section_title:
   :noindex:

   A method for variant graph genotyping based on exact alignment of k\-mers

   :homepage: https://github.com/bioinformatics-centre/BayesTyper
   :license: MIT
   :recipe: /`bayestyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayestyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayestyper/meta.yaml>`_

   


.. conda:package:: bayestyper

   |downloads_bayestyper| |docker_bayestyper|

   :versions:
      
      

      ``1.5-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bayestyper

   and update with::

      conda update bayestyper

   or use the docker container::

      docker pull quay.io/biocontainers/bayestyper:<tag>

   (see `bayestyper/tags`_ for valid values for ``<tag>``)


.. |downloads_bayestyper| image:: https://img.shields.io/conda/dn/bioconda/bayestyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bayestyper
   :alt:   (downloads)
.. |docker_bayestyper| image:: https://quay.io/repository/biocontainers/bayestyper/status
   :target: https://quay.io/repository/biocontainers/bayestyper
.. _`bayestyper/tags`: https://quay.io/repository/biocontainers/bayestyper?tab=tags


.. raw:: html

    <script>
        var package = "bayestyper";
        var versions = ["1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayestyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayestyper/README.html