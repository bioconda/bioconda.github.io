:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasv'
.. highlight: bash

metasv
======

.. conda:recipe:: metasv
   :replaces_section_title:
   :noindex:

   An accurate and integrative structural\-variant caller for next generation sequencing

   :homepage: https://github.com/bioinform/metasv
   :license: MIT
   :recipe: /`metasv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasv/meta.yaml>`_

   


.. conda:package:: metasv

   |downloads_metasv| |docker_metasv|

   :versions:
      
      

      ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.4.0-4``,  ``0.4.0-3``

      

   
   :depends on age-metasv: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on pybedtools: ``0.6.9``
   :depends on pysam: ``0.7.7``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on pyvcf: ``0.6.7``
   :depends on spades: 

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

    pixi global install metasv

to add into an existing workspace instead, run::

    pixi add metasv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metasv

Alternatively, to install into a new environment, run::

    conda create -n envname metasv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metasv:<tag>

(see `metasv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metasv| image:: https://img.shields.io/conda/dn/bioconda/metasv.svg?style=flat
   :target: https://anaconda.org/bioconda/metasv
   :alt:   (downloads)
.. |docker_metasv| image:: https://quay.io/repository/biocontainers/metasv/status
   :target: https://quay.io/repository/biocontainers/metasv
.. _`metasv/tags`: https://quay.io/repository/biocontainers/metasv?tab=tags


.. raw:: html

    <script>
        var package = "metasv";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasv/README.html