:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emeraldbgc'
.. highlight: bash

emeraldbgc
==========

.. conda:recipe:: emeraldbgc
   :replaces_section_title:
   :noindex:

   SMBGC detection tool

   :homepage: https://github.com/Finn-Lab/emeraldBGC
   :license: Apache / Apache-2.0
   :recipe: /`emeraldbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emeraldbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emeraldbgc/meta.yaml>`_

   


.. conda:package:: emeraldbgc

   |downloads_emeraldbgc| |docker_emeraldbgc|

   :versions:
      
      

      ``0.2.4.1-0``,  ``0.2.3.1-0``,  ``0.2.3-0``

      

   
   :depends on biopython: 
   :depends on hmmer: 
   :depends on joblib: ``>=1.0.1``
   :depends on numpy: ``>=1.16,<1.20``
   :depends on openjdk: ``>=11.0``
   :depends on perl: ``>=5``
   :depends on prodigal: 
   :depends on python: ``>=3.7``
   :depends on scikit-learn: ``0.24.*``
   :depends on tensorflow: ``2.4.*``

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

    pixi global install emeraldbgc

to add into an existing workspace instead, run::

    pixi add emeraldbgc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install emeraldbgc

Alternatively, to install into a new environment, run::

    conda create -n envname emeraldbgc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/emeraldbgc:<tag>

(see `emeraldbgc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_emeraldbgc| image:: https://img.shields.io/conda/dn/bioconda/emeraldbgc.svg?style=flat
   :target: https://anaconda.org/bioconda/emeraldbgc
   :alt:   (downloads)
.. |docker_emeraldbgc| image:: https://quay.io/repository/biocontainers/emeraldbgc/status
   :target: https://quay.io/repository/biocontainers/emeraldbgc
.. _`emeraldbgc/tags`: https://quay.io/repository/biocontainers/emeraldbgc?tab=tags


.. raw:: html

    <script>
        var package = "emeraldbgc";
        var versions = ["0.2.4.1","0.2.3.1","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emeraldbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emeraldbgc/README.html