:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'me-pcr'
.. highlight: bash

me-pcr
======

.. conda:recipe:: me-pcr
   :replaces_section_title:
   :noindex:

   Multithreaded Electronic PCR \(in\-silico PCR\) based on NCBI e\-PCR.

   :homepage: https://web.archive.org/web/20100708193215/http://genome.chop.edu/mePCR/
   :license: Public Domain
   :recipe: /`me-pcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/me-pcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/me-pcr/meta.yaml>`_
   :links: biotools: :biotools:`me-pcr`

   Multithreaded Electronic PCR \(me\-PCR\) was developed by Kevin Murphy at
   Children\'s Hospital of Philadelphia. It is described in Murphy et al
   \(2004\) https\:\/\/doi.org\/10.1093\/bioinformatics\/btg466 and was originally
   available from http\:\/\/genome.chop.edu\/mePCR \(defunct\). It was based on the
   public domain NCBI tool e\-PCR by Gregory D. Schuler\, described in Schuler
   \(1997\) https\:\/\/doi.org\/10.1101\/gr.7.5.541 which was origially availble
   from ftp\:\/\/ncbi.nlm.nih.gov\/pub\/schuler\/e\-PCR\/ \(defunct\). The final
   release of me\-PCR was v1.0.6 \(2008\-02\-18\)\, and the author wrote that in
   general NCBI e\-PCR should be used instead having been improved greatly
   over the years. The NCBI retired and withdrew the e\-PCR webservice and
   command line tool on 2017\-06\-28\, suggesting the online\-only tool
   Primer\-BLAST instead. However\, this is not suitable for offline high
   throughput usage. See also Jim Kent\'s isPCR \(aslo available in BioConda\).



.. conda:package:: me-pcr

   |downloads_me-pcr| |docker_me-pcr|

   :versions:
      
      

      ``1.0.6-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install me-pcr

   and update with::

      mamba update me-pcr

  To create a new environment, run::

      mamba create --name myenvname me-pcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/me-pcr:<tag>

   (see `me-pcr/tags`_ for valid values for ``<tag>``)


.. |downloads_me-pcr| image:: https://img.shields.io/conda/dn/bioconda/me-pcr.svg?style=flat
   :target: https://anaconda.org/bioconda/me-pcr
   :alt:   (downloads)
.. |docker_me-pcr| image:: https://quay.io/repository/biocontainers/me-pcr/status
   :target: https://quay.io/repository/biocontainers/me-pcr
.. _`me-pcr/tags`: https://quay.io/repository/biocontainers/me-pcr?tab=tags


.. raw:: html

    <script>
        var package = "me-pcr";
        var versions = ["1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/me-pcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/me-pcr/README.html