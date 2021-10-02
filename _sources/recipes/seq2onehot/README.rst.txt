:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2onehot'
.. highlight: bash

seq2onehot
==========

.. conda:recipe:: seq2onehot
   :replaces_section_title:
   :noindex:

   Encode biological sequences to a one\-hot numpy array

   :homepage: https://github.com/akikuno/seq2onehot
   :license: MIT / MIT
   :recipe: /`seq2onehot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2onehot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2onehot/meta.yaml>`_

   


.. conda:package:: seq2onehot

   |downloads_seq2onehot| |docker_seq2onehot|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends numpy: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq2onehot

   and update with::

      conda update seq2onehot

   or use the docker container::

      docker pull quay.io/biocontainers/seq2onehot:<tag>

   (see `seq2onehot/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2onehot| image:: https://img.shields.io/conda/dn/bioconda/seq2onehot.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2onehot
   :alt:   (downloads)
.. |docker_seq2onehot| image:: https://quay.io/repository/biocontainers/seq2onehot/status
   :target: https://quay.io/repository/biocontainers/seq2onehot
.. _`seq2onehot/tags`: https://quay.io/repository/biocontainers/seq2onehot?tab=tags


.. raw:: html

    <script>
        var package = "seq2onehot";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2onehot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2onehot/README.html