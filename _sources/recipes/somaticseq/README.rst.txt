:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somaticseq'
.. highlight: bash

somaticseq
==========

.. conda:recipe:: somaticseq
   :replaces_section_title:
   :noindex:

   An ensemble approach to accurately detect somatic mutations.

   :homepage: https://bioinform.github.io/somaticseq
   :developer docs: https://github.com/bioinform/somaticseq
   :license: BSD / BSD-2-Clause
   :recipe: /`somaticseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somaticseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somaticseq/meta.yaml>`_

   SomaticSeq is an ensemble caller that has the ability to use machine learning to filter out false positives. The detailed documentation is included in the package\, located in docs\/Manual.pdf. A quick guide can also be found here. SomaticSeq\'s open\-access paper\: Fang LT\, Afshar PT\, Chhibber A\, et al. An ensemble approach to accurately detect somatic mutations using SomaticSeq. Genome Biol. 2015\;16\:197.


.. conda:package:: somaticseq

   |downloads_somaticseq| |docker_somaticseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.11.1-0</code>,  <code>3.11.0-0</code>,  <code>3.10.0-0</code>,  <code>3.9.1-0</code>,  <code>3.8.0-0</code>,  <code>3.7.4-0</code>,  <code>3.7.3-0</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  </span></summary>
      

      ``3.11.1-0``,  ``3.11.0-0``,  ``3.10.0-0``,  ``3.9.1-0``,  ``3.8.0-0``,  ``3.7.4-0``,  ``3.7.3-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.2-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``2.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gatk4: 
   :depends on lofreq: 
   :depends on muse: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pydantic: 
   :depends on pysam: 
   :depends on python: ``>=3.11``
   :depends on r-ada: 
   :depends on r-base: 
   :depends on scalpel: 
   :depends on scipy: 
   :depends on vardict: 
   :depends on varscan: ``>=2``
   :depends on xgboost: ``>=1.4``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install somaticseq

to add into an existing workspace instead, run::

    pixi add somaticseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install somaticseq

Alternatively, to install into a new environment, run::

    conda create -n envname somaticseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/somaticseq:<tag>

(see `somaticseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_somaticseq| image:: https://img.shields.io/conda/dn/bioconda/somaticseq.svg?style=flat
   :target: https://anaconda.org/bioconda/somaticseq
   :alt:   (downloads)
.. |docker_somaticseq| image:: https://quay.io/repository/biocontainers/somaticseq/status
   :target: https://quay.io/repository/biocontainers/somaticseq
.. _`somaticseq/tags`: https://quay.io/repository/biocontainers/somaticseq?tab=tags


.. raw:: html

    <script>
        var package = "somaticseq";
        var versions = ["3.11.1","3.11.0","3.10.0","3.9.1","3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somaticseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somaticseq/README.html