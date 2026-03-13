:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chira'
.. highlight: bash

chira
=====

.. conda:recipe:: chira
   :replaces_section_title:
   :noindex:

   An integrated framework for annotation and visualization of chimeric reads.

   :homepage: https://github.com/pavanvidem/chira/
   :license: GNU GENERAL PUBLIC LICENSE Version 3
   :recipe: /`chira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chira/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`chira_quantify`

   


.. conda:package:: chira

   |downloads_chira| |docker_chira|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-2</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  </span></summary>
      

      ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: ``>=0.6.6``
   :depends on bedtools: ``>=2.29.2``
   :depends on biopython: ``>=1.76``
   :depends on blockbuster: ``>=0.0.1.1``
   :depends on bwa: ``>=0.7.17``
   :depends on clan: ``>=0.05``
   :depends on coreutils: ``>=8.31``
   :depends on intarna: ``>=3.2.0``
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>3``
   :depends on samtools: ``>=1.9``

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

    pixi global install chira

to add into an existing workspace instead, run::

    pixi add chira

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chira

Alternatively, to install into a new environment, run::

    conda create -n envname chira

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chira:<tag>

(see `chira/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chira| image:: https://img.shields.io/conda/dn/bioconda/chira.svg?style=flat
   :target: https://anaconda.org/bioconda/chira
   :alt:   (downloads)
.. |docker_chira| image:: https://quay.io/repository/biocontainers/chira/status
   :target: https://quay.io/repository/biocontainers/chira
.. _`chira/tags`: https://quay.io/repository/biocontainers/chira?tab=tags


.. raw:: html

    <script>
        var package = "chira";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.2","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chira/README.html