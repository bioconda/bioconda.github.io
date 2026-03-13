:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meteor'
.. highlight: bash

meteor
======

.. conda:recipe:: meteor
   :replaces_section_title:
   :noindex:

   Meteor is a plateform for quantitative metagenomics profiling of complex ecosystems.

   :homepage: https://github.com/metagenopolis/meteor
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`meteor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meteor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meteor/meta.yaml>`_

   Meteor is a plateform for quantitative metagenomics profiling of complex ecosystems. Meteor relies on genes catalogue to perform species\-level taxonomic profiling \(Bacteria\, Archaea and Eukaryotes\)\, functional analysis and strain\-level population structure inference.



.. conda:package:: meteor

   |downloads_meteor| |docker_meteor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.22-0</code>,  <code>2.0.21-0</code>,  <code>2.0.20-0</code>,  <code>2.0.19-0</code>,  <code>2.0.18-0</code>,  <code>2.0.17-0</code>,  <code>2.0.16-0</code>,  <code>2.0.14-2</code>,  <code>2.0.14-1</code>,  </span></summary>
      

      ``2.0.22-0``,  ``2.0.21-0``,  ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.17-0``,  ``2.0.16-0``,  ``2.0.14-2``,  ``2.0.14-1``,  ``2.0.14-0``,  ``2.0.13-0``,  ``2.0.11-0``,  ``2.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biom-format: 
   :depends on bowtie2: ``>=2.3.5``
   :depends on cogent3: 
   :depends on ete4: 
   :depends on freebayes: ``>=1.3.6``
   :depends on packaging: 
   :depends on pandas: 
   :depends on py-bgzip: 
   :depends on pyarrow: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.13``

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

    pixi global install meteor

to add into an existing workspace instead, run::

    pixi add meteor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install meteor

Alternatively, to install into a new environment, run::

    conda create -n envname meteor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/meteor:<tag>

(see `meteor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_meteor| image:: https://img.shields.io/conda/dn/bioconda/meteor.svg?style=flat
   :target: https://anaconda.org/bioconda/meteor
   :alt:   (downloads)
.. |docker_meteor| image:: https://quay.io/repository/biocontainers/meteor/status
   :target: https://quay.io/repository/biocontainers/meteor
.. _`meteor/tags`: https://quay.io/repository/biocontainers/meteor?tab=tags


.. raw:: html

    <script>
        var package = "meteor";
        var versions = ["2.0.22","2.0.21","2.0.20","2.0.19","2.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meteor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meteor/README.html