:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minibusco'
.. highlight: bash

minibusco
=========

.. conda:recipe:: minibusco
   :replaces_section_title:
   :noindex:

   minibusco\: a faster and more accurate reimplementation of BUSCO

   :homepage: https://github.com/huangnengCSU/minibusco
   :license: Apache License 2.0
   :recipe: /`minibusco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minibusco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minibusco/meta.yaml>`_

   


.. conda:package:: minibusco

   |downloads_minibusco| |docker_minibusco|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2-0``

      

   
   :depends dendropy: ``<4.6.0``
   :depends hmmer: 
   :depends miniprot: ``>=0.11``
   :depends pandas: 
   :depends python: 
   :depends sepp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minibusco

   and update with::

      conda update minibusco

   or use the docker container::

      docker pull quay.io/biocontainers/minibusco:<tag>

   (see `minibusco/tags`_ for valid values for ``<tag>``)


.. |downloads_minibusco| image:: https://img.shields.io/conda/dn/bioconda/minibusco.svg?style=flat
   :target: https://anaconda.org/bioconda/minibusco
   :alt:   (downloads)
.. |docker_minibusco| image:: https://quay.io/repository/biocontainers/minibusco/status
   :target: https://quay.io/repository/biocontainers/minibusco
.. _`minibusco/tags`: https://quay.io/repository/biocontainers/minibusco?tab=tags


.. raw:: html

    <script>
        var package = "minibusco";
        var versions = ["0.2.1","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minibusco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minibusco/README.html