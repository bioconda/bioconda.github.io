.. title:: Package Recipe 'fastspar'
.. highlight: bash


fastspar
========

.. conda:recipe:: fastspar
   :replaces_section_title:

   Rapid and scalable correlation estimation for compositional data

   :homepage: https://github.com/scwatts/fastspar
   :license: GPLv3
   :recipe: /`fastspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastspar/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1093/bioinformatics/bty734`, doi: :doi:`https://doi.org/10.1371/journal.pcbi.1002687`

   \`\`FastSpar\`\` is a C\+\+ implementation of the SparCC algorithm
   which is up to several thousand times faster than the original
   Python2 release and uses much less memory. The \`\`FastSpar\`\`
   implementation provides threading support and a \*p\*\-value
   estimator which accounts for the possibility of repetitious data
   permutations.



.. conda:package:: fastspar

   |downloads_fastspar| |docker_fastspar|

   :versions: 0.0.9, 0.0.6

   :depends: :conda:package:`armadillo` >=8.200,<9.0a0 :conda:package:`gnu-getopt`  :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`libgfortran` >=3.0 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`openmp` 4.0.* :conda:package:`openmp` >=4.0 

   :required~by: |required_by_fastspar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastspar

   and update with::

      conda update fastspar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastspar


.. |required_by_fastspar| conda:required_by:: fastspar
.. |downloads_fastspar| image:: https://img.shields.io/conda/dn/bioconda/fastspar.svg?style=flat
   :alt:   (downloads)
.. |docker_fastspar| image:: https://quay.io/repository/biocontainers/fastspar/status
   :target: https://quay.io/repository/biocontainers/fastspar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastspar/README.html

