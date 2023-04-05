:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macsyfinder'
.. highlight: bash

macsyfinder
===========

.. conda:recipe:: macsyfinder
   :replaces_section_title:
   :noindex:

   MacSyFinder\: Detection of macromolecular systems in protein datasets using systems modelling and similarity search

   :homepage: https://github.com/gem-pasteur/macsyfinder
   :documentation: https://macsyfinder.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`macsyfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsyfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsyfinder/meta.yaml>`_
   :links: biotools: :biotools:`macsyfinder`, doi: :doi:`10.1371/journal/pone.0110726`

   


.. conda:package:: macsyfinder

   |downloads_macsyfinder| |docker_macsyfinder|

   :versions:
      
      

      ``2.1.1-0``,  ``2.1-0``,  ``2.0-0``

      

   
   :depends certifi: 
   :depends colorama: ``>=0.4.4``
   :depends colorlog: 
   :depends hmmer: ``>=3.1b2,<=3.3.2``
   :depends networkx: ``>=2.4``
   :depends packaging: ``>=18.0``
   :depends pandas: ``>=1.1.5,<=1.4.3``
   :depends python: 
   :depends pyyaml: ``>=5.1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install macsyfinder

   and update with::

      conda update macsyfinder

   or use the docker container::

      docker pull quay.io/biocontainers/macsyfinder:<tag>

   (see `macsyfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_macsyfinder| image:: https://img.shields.io/conda/dn/bioconda/macsyfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/macsyfinder
   :alt:   (downloads)
.. |docker_macsyfinder| image:: https://quay.io/repository/biocontainers/macsyfinder/status
   :target: https://quay.io/repository/biocontainers/macsyfinder
.. _`macsyfinder/tags`: https://quay.io/repository/biocontainers/macsyfinder?tab=tags


.. raw:: html

    <script>
        var package = "macsyfinder";
        var versions = ["2.1.1","2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macsyfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macsyfinder/README.html