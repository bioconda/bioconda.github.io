:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sirius-csifingerid'
.. highlight: bash

sirius-csifingerid
==================

.. conda:recipe:: sirius-csifingerid
   :replaces_section_title:
   :noindex:

   SIRIUS \(CLI \+ GUI\) LC\-MS\/MS data analyses framework. Includes\: SIRIUS\, ZODIAC\, CSI\:FingerID \(with COSMIC\) and CANOPUS

   :homepage: https://bio.informatik.uni-jena.de/software/sirius/
   :documentation: https://boecker-lab.github.io/docs.sirius.github.io/
   
   :developer docs: https://github.com/boecker-lab/sirius
   :license: AGPL-3.0-only AND OTHER
   :recipe: /`sirius-csifingerid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid/meta.yaml>`_

   SIRIUS is a java\-based software framework for the analysis of LC\-MS\/MS data of metabolites and other small molecules of biological interest. SIRIUS integrates a collection of our tools\, including CSI\:FingerID \(with COSMIC\)\, ZODIAC and CANOPUS.  In particular\, both the graphical user interface and the command line version of SIRIUS seamlessly integrate the CSI\:FingerID and CANOPUS web services.


.. conda:package:: sirius-csifingerid

   |downloads_sirius-csifingerid| |docker_sirius-csifingerid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.8.6-0</code>,  <code>5.8.5-0</code>,  <code>5.8.4-0</code>,  <code>5.8.3-0</code>,  <code>5.8.2-0</code>,  <code>4.9.15-3</code>,  <code>4.9.15-2</code>,  <code>4.9.15-1</code>,  <code>4.9.15-0</code>,  </span></summary>
      

      ``5.8.6-0``,  ``5.8.5-0``,  ``5.8.4-0``,  ``5.8.3-0``,  ``5.8.2-0``,  ``4.9.15-3``,  ``4.9.15-2``,  ``4.9.15-1``,  ``4.9.15-0``,  ``4.9.8-2``,  ``4.9.8-1``,  ``4.9.8-0``,  ``4.9.4-0``,  ``4.9.3-0``,  ``4.0.1-1``,  ``4.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends coin-or-cbc: 
   :depends openjdk: ``17.*``
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

      mamba install sirius-csifingerid

   and update with::

      mamba update sirius-csifingerid

  To create a new environment, run::

      mamba create --name myenvname sirius-csifingerid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sirius-csifingerid:<tag>

   (see `sirius-csifingerid/tags`_ for valid values for ``<tag>``)


.. |downloads_sirius-csifingerid| image:: https://img.shields.io/conda/dn/bioconda/sirius-csifingerid.svg?style=flat
   :target: https://anaconda.org/bioconda/sirius-csifingerid
   :alt:   (downloads)
.. |docker_sirius-csifingerid| image:: https://quay.io/repository/biocontainers/sirius-csifingerid/status
   :target: https://quay.io/repository/biocontainers/sirius-csifingerid
.. _`sirius-csifingerid/tags`: https://quay.io/repository/biocontainers/sirius-csifingerid?tab=tags


.. raw:: html

    <script>
        var package = "sirius-csifingerid";
        var versions = ["5.8.6","5.8.5","5.8.4","5.8.3","5.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sirius-csifingerid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sirius-csifingerid/README.html