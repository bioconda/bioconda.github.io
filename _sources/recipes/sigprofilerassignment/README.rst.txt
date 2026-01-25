:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigprofilerassignment'
.. highlight: bash

sigprofilerassignment
=====================

.. conda:recipe:: sigprofilerassignment
   :replaces_section_title:
   :noindex:

   SigProfilerAssignment \- Assignment of known mutational signatures to individual samples and individual somatic mutations

   :homepage: https://github.com/AlexandrovLab/SigProfilerAssignment.git
   :license: BSD-2-Clause
   :recipe: /`sigprofilerassignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerassignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerassignment/meta.yaml>`_

   


.. conda:package:: sigprofilerassignment

   |downloads_sigprofilerassignment| |docker_sigprofilerassignment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-0</code>,  <code>1.1.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  </span></summary>
      

      ``1.1.3-0``,  ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends alive-progress: ``>=2.4.1``
   :depends numpy: ``>=2.0.0``
   :depends pandas: ``>=2.0.0``
   :depends pdf2image: ``>=1.16.0``
   :depends poppler: 
   :depends pypdf: ``>=5.0.0``
   :depends python: ``>=3.9``
   :depends reportlab: ``>=3.5.42``
   :depends scipy: ``>=1.13``
   :depends sigprofilermatrixgenerator: ``>=1.3.0``
   :depends sigprofilerplotting: ``>=1.4.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sigprofilerassignment

   and update with::

      mamba update sigprofilerassignment

  To create a new environment, run::

      mamba create --name myenvname sigprofilerassignment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sigprofilerassignment:<tag>

   (see `sigprofilerassignment/tags`_ for valid values for ``<tag>``)


.. |downloads_sigprofilerassignment| image:: https://img.shields.io/conda/dn/bioconda/sigprofilerassignment.svg?style=flat
   :target: https://anaconda.org/bioconda/sigprofilerassignment
   :alt:   (downloads)
.. |docker_sigprofilerassignment| image:: https://quay.io/repository/biocontainers/sigprofilerassignment/status
   :target: https://quay.io/repository/biocontainers/sigprofilerassignment
.. _`sigprofilerassignment/tags`: https://quay.io/repository/biocontainers/sigprofilerassignment?tab=tags


.. raw:: html

    <script>
        var package = "sigprofilerassignment";
        var versions = ["1.1.3","1.1.1","1.0.4","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigprofilerassignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigprofilerassignment/README.html