:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitoz'
.. highlight: bash

mitoz
=====

.. conda:recipe:: mitoz
   :replaces_section_title:
   :noindex:

   MitoZ\: A toolkit for assembly\, annotation\, and visualization of animal mitochondrial genomes

   :homepage: https://github.com/linzhi2013/MitoZ
   :license: GPLv3
   :recipe: /`mitoz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitoz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitoz/meta.yaml>`_

   


.. conda:package:: mitoz

   |downloads_mitoz| |docker_mitoz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6-1</code>,  <code>3.6-0</code>,  <code>3.5-0</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.3-1</code>,  <code>3.3-0</code>,  <code>3.2-0</code>,  <code>3.1-0</code>,  </span></summary>
      

      ``3.6-1``,  ``3.6-0``,  ``3.5-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on bs4: 
   :depends on bwa: 
   :depends on circos: ``0.69.*``
   :depends on coreutils: 
   :depends on ete3: ``>=3.1.2``
   :depends on fastp: 
   :depends on hmmer: ``3.1b2.*``
   :depends on html5lib: 
   :depends on infernal: ``1.1.1.*``
   :depends on libgd: 
   :depends on megahit: 
   :depends on openjdk: 
   :depends on perl: ``5.32.*``
   :depends on perl-app-cpanminus: 
   :depends on perl-bioperl: 
   :depends on perl-clone: 
   :depends on perl-config-general: 
   :depends on perl-encode-locale: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-bezier: 
   :depends on perl-math-round: 
   :depends on perl-math-vecstat: 
   :depends on perl-params-validate: 
   :depends on perl-set-intspan: 
   :depends on perl-statistics-basic: 
   :depends on perl-statistics-descriptive: 
   :depends on pkgconfig: 
   :depends on python: ``>=3.6,<3.9``
   :depends on requests: 
   :depends on samtools: 
   :depends on seqkit: 
   :depends on spades: ``>=3.15.4``
   :depends on tbl2asn: 
   :depends on tiara: 
   :depends on wise2: 

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

    pixi global install mitoz

to add into an existing workspace instead, run::

    pixi add mitoz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mitoz

Alternatively, to install into a new environment, run::

    conda create -n envname mitoz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mitoz:<tag>

(see `mitoz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mitoz| image:: https://img.shields.io/conda/dn/bioconda/mitoz.svg?style=flat
   :target: https://anaconda.org/bioconda/mitoz
   :alt:   (downloads)
.. |docker_mitoz| image:: https://quay.io/repository/biocontainers/mitoz/status
   :target: https://quay.io/repository/biocontainers/mitoz
.. _`mitoz/tags`: https://quay.io/repository/biocontainers/mitoz?tab=tags


.. raw:: html

    <script>
        var package = "mitoz";
        var versions = ["3.6","3.6","3.5","3.4","3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitoz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitoz/README.html