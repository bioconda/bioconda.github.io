.. title:: Package Recipe 'polymutt'
.. highlight: bash


polymutt
========

.. conda:recipe:: polymutt
   :replaces_section_title:

   Li B\, Chen W\, Zhan X\, Busonero F\, Sanna S\, et al. \(2012\) A Likelihood\-Based Framework for Variant Calling and De Novo Mutation Detection in Families. PLoS Genet 8\(10\)\: e1002944. doi\:10.1371\/journal.pgen.1002944

   :homepage: https://genome.sph.umich.edu/wiki/Polymutt
   :license: custom (written permission by author to publish on bioconda)
   :recipe: /`polymutt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polymutt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polymutt/meta.yaml>`_

   


.. conda:package:: polymutt

   |downloads_polymutt| |docker_polymutt|

   :versions: 0.18

   :depends: :conda:package:`bzip2` 1.0* :conda:package:`libgcc`  :conda:package:`openmp`  

   :required~by: |required_by_polymutt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install polymutt

   and update with::

      conda update polymutt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/polymutt


.. |required_by_polymutt| conda:required_by:: polymutt
.. |downloads_polymutt| image:: https://img.shields.io/conda/dn/bioconda/polymutt.svg?style=flat
   :alt:   (downloads)
.. |docker_polymutt| image:: https://quay.io/repository/biocontainers/polymutt/status
   :target: https://quay.io/repository/biocontainers/polymutt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polymutt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polymutt/README.html

