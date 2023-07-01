:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanometa-live'
.. highlight: bash

nanometa-live
=============

.. conda:recipe:: nanometa-live
   :replaces_section_title:
   :noindex:

   Workflow and GUI for real\-time species classification and pathogen characterization of nanopore sequence reads.

   :homepage: https://github.com/FOI-Bioinformatics/nanometa_live
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanometa-live <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanometa-live>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanometa-live/meta.yaml>`_

   


.. conda:package:: nanometa-live

   |downloads_nanometa-live| |docker_nanometa-live|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends blast: ``>=2.13.0``
   :depends dash: ``>=2.8.1``
   :depends dash-bootstrap-components: ``>=1.3.1``
   :depends dash-daq: ``>=0.5.0``
   :depends numpy: ``>=1.24.1``
   :depends pandas: ``>=1.5.3``
   :depends plotly: ``>=5.13.0``
   :depends python: ``>3``
   :depends pyyaml: ``>=6.0``
   :depends snakemake: ``>=7.20.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanometa-live

   and update with::

      conda update nanometa-live

   or use the docker container::

      docker pull quay.io/biocontainers/nanometa-live:<tag>

   (see `nanometa-live/tags`_ for valid values for ``<tag>``)


.. |downloads_nanometa-live| image:: https://img.shields.io/conda/dn/bioconda/nanometa-live.svg?style=flat
   :target: https://anaconda.org/bioconda/nanometa-live
   :alt:   (downloads)
.. |docker_nanometa-live| image:: https://quay.io/repository/biocontainers/nanometa-live/status
   :target: https://quay.io/repository/biocontainers/nanometa-live
.. _`nanometa-live/tags`: https://quay.io/repository/biocontainers/nanometa-live?tab=tags


.. raw:: html

    <script>
        var package = "nanometa-live";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanometa-live/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanometa-live/README.html