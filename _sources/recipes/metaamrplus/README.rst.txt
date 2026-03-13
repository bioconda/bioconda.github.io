:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaamrplus'
.. highlight: bash

metaamrplus
===========

.. conda:recipe:: metaamrplus
   :replaces_section_title:
   :noindex:

   MetaAMRplus\: unified detection of antimicrobial and metal resistance genes with colocalisation analysis

   :homepage: https://github.com/migshaw03/MetaAMRplus
   :license: MIT
   :recipe: /`metaamrplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaamrplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaamrplus/meta.yaml>`_

   MetaAMRplus is a command\-line platform for the simultaneous identification
   of antimicrobial resistance genes\, metal and biocide resistance genes\,
   and their genomic colocalisation in bacterial genomes and plasmids.
   The tool integrates AMRFinder and BacMet databases and is designed for
   reproducible large\-scale genomic analyses.



.. conda:package:: metaamrplus

   |downloads_metaamrplus| |docker_metaamrplus|

   :versions:
      
      

      ``1.4.1-0``,  ``1.4-0``

      

   
   :depends on awk: 
   :depends on blast: 
   :depends on ncbi-amrfinderplus: 
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on wget: 

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

    pixi global install metaamrplus

to add into an existing workspace instead, run::

    pixi add metaamrplus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaamrplus

Alternatively, to install into a new environment, run::

    conda create -n envname metaamrplus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaamrplus:<tag>

(see `metaamrplus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaamrplus| image:: https://img.shields.io/conda/dn/bioconda/metaamrplus.svg?style=flat
   :target: https://anaconda.org/bioconda/metaamrplus
   :alt:   (downloads)
.. |docker_metaamrplus| image:: https://quay.io/repository/biocontainers/metaamrplus/status
   :target: https://quay.io/repository/biocontainers/metaamrplus
.. _`metaamrplus/tags`: https://quay.io/repository/biocontainers/metaamrplus?tab=tags


.. raw:: html

    <script>
        var package = "metaamrplus";
        var versions = ["1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaamrplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaamrplus/README.html