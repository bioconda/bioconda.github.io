:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'replidec'
.. highlight: bash

replidec
========

.. conda:recipe:: replidec
   :replaces_section_title:
   :noindex:

   Replication Cycle Decipher for Phages.

   :homepage: https://github.com/deng-lab/Replidec
   :documentation: https://github.com/pengSherryYel/Replidec/blob/v.0.3.5/README.md
   
   :developer docs: https://github.com/pengSherryYel/Replidec
   :license: MIT / MIT
   :recipe: /`replidec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/replidec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/replidec/meta.yaml>`_

   


.. conda:package:: replidec

   |downloads_replidec| |docker_replidec|

   :versions:
      
      

      ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.1.1-0``

      

   
   :depends on biopython: ``>=1.77``
   :depends on blast: 
   :depends on future: ``>=0.18.2``
   :depends on hmmer: 
   :depends on mmseqs2: 
   :depends on numpy: ``>=1.21``
   :depends on prodigal: 
   :depends on python: ``>=3.8``

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

    pixi global install replidec

to add into an existing workspace instead, run::

    pixi add replidec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install replidec

Alternatively, to install into a new environment, run::

    conda create -n envname replidec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/replidec:<tag>

(see `replidec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_replidec| image:: https://img.shields.io/conda/dn/bioconda/replidec.svg?style=flat
   :target: https://anaconda.org/bioconda/replidec
   :alt:   (downloads)
.. |docker_replidec| image:: https://quay.io/repository/biocontainers/replidec/status
   :target: https://quay.io/repository/biocontainers/replidec
.. _`replidec/tags`: https://quay.io/repository/biocontainers/replidec?tab=tags


.. raw:: html

    <script>
        var package = "replidec";
        var versions = ["0.3.5","0.3.4","0.3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/replidec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/replidec/README.html