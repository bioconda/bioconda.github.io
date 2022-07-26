:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mydbfinder'
.. highlight: bash

mydbfinder
==========

.. conda:recipe:: mydbfinder
   :replaces_section_title:
   :noindex:

   MyDbFinder identifies genes from your own database in total or partial sequenced isolates of bacteria.

   :homepage: https://bitbucket.org/genomicepidemiology/mydbfinder
   :license: APACHE / APACHE-2.0
   :recipe: /`mydbfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mydbfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mydbfinder/meta.yaml>`_

   


.. conda:package:: mydbfinder

   |downloads_mydbfinder| |docker_mydbfinder|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``1.5.5.*``
   :depends kma: 
   :depends python: ``>=3.5``
   :depends python-dateutil: 
   :depends tabulate: ``0.7.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mydbfinder

   and update with::

      conda update mydbfinder

   or use the docker container::

      docker pull quay.io/biocontainers/mydbfinder:<tag>

   (see `mydbfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_mydbfinder| image:: https://img.shields.io/conda/dn/bioconda/mydbfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/mydbfinder
   :alt:   (downloads)
.. |docker_mydbfinder| image:: https://quay.io/repository/biocontainers/mydbfinder/status
   :target: https://quay.io/repository/biocontainers/mydbfinder
.. _`mydbfinder/tags`: https://quay.io/repository/biocontainers/mydbfinder?tab=tags


.. raw:: html

    <script>
        var package = "mydbfinder";
        var versions = ["1.0.5"];
    </script>





Notes
-----
MyDbFinder identifies sequences \(in fasta or fastq\) in databases provided by the user.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mydbfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mydbfinder/README.html