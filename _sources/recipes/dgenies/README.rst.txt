:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dgenies'
.. highlight: bash

dgenies
=======

.. conda:recipe:: dgenies
   :replaces_section_title:
   :noindex:

   Dotplot large Genomes in an Interactive\, Efficient and Simple way

   :homepage: http://dgenies.toulouse.inrae.fr
   :documentation: http://dgenies.toulouse.inrae.fr/
   
   :developer docs: https://github.com/genotoul-bioinfo/dgenies
   :license: GPL / GPL-3
   :recipe: /`dgenies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies/meta.yaml>`_

   


.. conda:package:: dgenies

   |downloads_dgenies| |docker_dgenies|

   :versions:
      
      

      ``1.2.0.2-0``,  ``1.2.0.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends flask: ``1.0.*``
   :depends intervaltree: ``2.1.*``
   :depends jinja2: ``>=2.11.3,<3``
   :depends markdown: ``2.6.*``
   :depends matplotlib-base: ``>=2.1``
   :depends numpy: 
   :depends psutil: ``>=5.6.6,<5.7``
   :depends python: ``>=3.5,<3.10``
   :depends python-crontab: ``>=2.2``
   :depends pyyaml: ``>=5.4.1,<5.5``
   :depends requests: ``>=2.20.1,2.21``
   :depends tendo: ``0.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dgenies

   and update with::

      conda update dgenies

   or use the docker container::

      docker pull quay.io/biocontainers/dgenies:<tag>

   (see `dgenies/tags`_ for valid values for ``<tag>``)


.. |downloads_dgenies| image:: https://img.shields.io/conda/dn/bioconda/dgenies.svg?style=flat
   :target: https://anaconda.org/bioconda/dgenies
   :alt:   (downloads)
.. |docker_dgenies| image:: https://quay.io/repository/biocontainers/dgenies/status
   :target: https://quay.io/repository/biocontainers/dgenies
.. _`dgenies/tags`: https://quay.io/repository/biocontainers/dgenies?tab=tags


.. raw:: html

    <script>
        var package = "dgenies";
        var versions = ["1.2.0.2","1.2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dgenies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dgenies/README.html