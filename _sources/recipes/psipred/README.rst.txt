:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psipred'
.. highlight: bash

psipred
=======

.. conda:recipe:: psipred
   :replaces_section_title:
   :noindex:

   Protein Secondary Structure Predictor

   :homepage: https://bioinf.cs.ucl.ac.uk/psipred
   :documentation: https://github.com/psipred/psipred/blob/v4.0/README
   
   :developer docs: https://github.com/psipred/psipred
   :license: OTHER / CUSTOM (academic-only)
   :recipe: /`psipred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psipred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psipred/meta.yaml>`_
   :links: doi: :doi:`10.1006/jmbi.1999.3091`

   PSIPRED is a  simple and accurate secondary structure prediction method\, incorporating two feed\-forward neural networks which perform an analysis on output obtained from
   \[PSI\-BLAST\]\(http\:\/\/www.ncbi.nlm.nih.gov\/blast\) \(Position Specific Iterated \- BLAST\).
   Using a very stringent cross validation method to evaluate the method\'s performance\, PSIPRED 3.2 achieves an average Q3 score of 81.6\%.
   Predictions produced by PSIPRED were also submitted to the \[CASP4\]\(http\:\/\/predictioncenter.llnl.gov\/casp4\/\) evaluation and assessed during the CASP4 meeting\, which took place in December 2000 at Asilomar.
   PSIPRED 2.0 achieved an average Q3 score of 80.6\% across all 40 submitted target domains with no obvious sequence similarity to structures present in PDB\, which ranked PSIPRED top out of 20 evaluated methods
   \(an earlier version of PSIPRED was also ranked top in CASP3 held in 1998\).
   It is important to realise\, however\, that due to the small sample sizes\, the results from CASP are not statistically significant\, although they do give a rough guide as to the current \"state of the art\".
   For a more reliable evaluation\, the \[EVA\]\(http\:\/\/pdg.cnb.uam.es\/eva\/\) web site at Columbia University provides a continuous evaluation. NOTE that at the time of writing\, the EVA site is no longer being updated.
   Downloads\: The PSIPRED V3.2 software can be downloaded from \[HERE\]\(http\:\/\/bioinfadmin.cs.ucl.ac.uk\/downloads\/psipred\/\).
   Please note that you should read the license terms given in the \[README\]\(http\:\/\/bioinfadmin.cs.ucl.ac.uk\/downloads\/psipred\/README\) file if you wish to incorporate PSIPRED in another program or Web server.
   Older releases of PSIPRED can be downloaded here \[HERE\]\(http\:\/\/bioinfadmin.cs.ucl.ac.uk\/downloads\/psipred\/old\/\).



.. conda:package:: psipred

   |downloads_psipred| |docker_psipred|

   :versions:
      
      

      ``4.0-0``,  ``3.5-0``

      

   
   :depends blast-legacy: 
   :depends libgcc: ``>=13``
   :depends tcsh: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install psipred

   and update with::

      mamba update psipred

  To create a new environment, run::

      mamba create --name myenvname psipred

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psipred:<tag>

   (see `psipred/tags`_ for valid values for ``<tag>``)


.. |downloads_psipred| image:: https://img.shields.io/conda/dn/bioconda/psipred.svg?style=flat
   :target: https://anaconda.org/bioconda/psipred
   :alt:   (downloads)
.. |docker_psipred| image:: https://quay.io/repository/biocontainers/psipred/status
   :target: https://quay.io/repository/biocontainers/psipred
.. _`psipred/tags`: https://quay.io/repository/biocontainers/psipred?tab=tags


.. raw:: html

    <script>
        var package = "psipred";
        var versions = ["4.0","3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psipred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psipred/README.html