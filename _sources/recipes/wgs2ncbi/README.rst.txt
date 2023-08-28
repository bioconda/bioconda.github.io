:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgs2ncbi'
.. highlight: bash

wgs2ncbi
========

.. conda:recipe:: wgs2ncbi
   :replaces_section_title:
   :noindex:

   Toolkit for preparing genomes for submission to NCBI

   :homepage: https://github.com/naturalis/wgs2ncbi
   :license: BSD-3-Clause
   :recipe: /`wgs2ncbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs2ncbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs2ncbi/meta.yaml>`_

   


.. conda:package:: wgs2ncbi

   |downloads_wgs2ncbi| |docker_wgs2ncbi|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-uri: 
   :depends tbl2asn: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install wgs2ncbi

   and update with::

      mamba update wgs2ncbi

  To create a new environment, run::

      mamba create --name myenvname wgs2ncbi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgs2ncbi:<tag>

   (see `wgs2ncbi/tags`_ for valid values for ``<tag>``)


.. |downloads_wgs2ncbi| image:: https://img.shields.io/conda/dn/bioconda/wgs2ncbi.svg?style=flat
   :target: https://anaconda.org/bioconda/wgs2ncbi
   :alt:   (downloads)
.. |docker_wgs2ncbi| image:: https://quay.io/repository/biocontainers/wgs2ncbi/status
   :target: https://quay.io/repository/biocontainers/wgs2ncbi
.. _`wgs2ncbi/tags`: https://quay.io/repository/biocontainers/wgs2ncbi?tab=tags


.. raw:: html

    <script>
        var package = "wgs2ncbi";
        var versions = ["1.1.2","1.1.2","1.1.2","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs2ncbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs2ncbi/README.html