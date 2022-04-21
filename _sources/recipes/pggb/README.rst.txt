:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pggb'
.. highlight: bash

pggb
====

.. conda:recipe:: pggb
   :replaces_section_title:
   :noindex:

   This pangenome graph construction pipeline renders a collection of sequences into a pangenome graph \(in the variation graph model\).

   :homepage: https://github.com/pangenome/pggb
   :license: MIT
   :recipe: /`pggb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb/meta.yaml>`_

   


.. conda:package:: pggb

   |downloads_pggb| |docker_pggb|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends bc: 
   :depends gfaffix: ``0.1.3.*``
   :depends idna: ``<3,>=2.5``
   :depends multiqc: ``>=1.11``
   :depends odgi: ``0.7.1.*``
   :depends pigz: 
   :depends seqwish: ``0.7.5.*``
   :depends smoothxg: ``0.6.4.*``
   :depends tabix: 
   :depends time: 
   :depends vg: ``1.39.0.*``
   :depends wfmash: ``0.8.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pggb

   and update with::

      conda update pggb

   or use the docker container::

      docker pull quay.io/biocontainers/pggb:<tag>

   (see `pggb/tags`_ for valid values for ``<tag>``)


.. |downloads_pggb| image:: https://img.shields.io/conda/dn/bioconda/pggb.svg?style=flat
   :target: https://anaconda.org/bioconda/pggb
   :alt:   (downloads)
.. |docker_pggb| image:: https://quay.io/repository/biocontainers/pggb/status
   :target: https://quay.io/repository/biocontainers/pggb
.. _`pggb/tags`: https://quay.io/repository/biocontainers/pggb?tab=tags


.. raw:: html

    <script>
        var package = "pggb";
        var versions = ["0.3.1","0.3.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pggb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pggb/README.html