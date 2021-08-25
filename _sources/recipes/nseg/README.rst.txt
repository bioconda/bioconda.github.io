:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nseg'
.. highlight: bash

nseg
====

.. conda:recipe:: nseg
   :replaces_section_title:
   :noindex:

   nseg identifies and masks regions of low complexity in nucleic acid sequences

   :homepage: https://github.com/jebrosen/nseg
   :license: Public Domain
   :recipe: /`nseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nseg/meta.yaml>`_
   :links: doi: :doi:`10.1016/0097-8485(93)85006-X`

   


.. conda:package:: nseg

   |downloads_nseg| |docker_nseg|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nseg

   and update with::

      conda update nseg

   or use the docker container::

      docker pull quay.io/biocontainers/nseg:<tag>

   (see `nseg/tags`_ for valid values for ``<tag>``)


.. |downloads_nseg| image:: https://img.shields.io/conda/dn/bioconda/nseg.svg?style=flat
   :target: https://anaconda.org/bioconda/nseg
   :alt:   (downloads)
.. |docker_nseg| image:: https://quay.io/repository/biocontainers/nseg/status
   :target: https://quay.io/repository/biocontainers/nseg
.. _`nseg/tags`: https://quay.io/repository/biocontainers/nseg?tab=tags


.. raw:: html

    <script>
        var package = "nseg";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nseg/README.html