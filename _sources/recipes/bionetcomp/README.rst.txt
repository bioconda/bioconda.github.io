:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bionetcomp'
.. highlight: bash

bionetcomp
==========

.. conda:recipe:: bionetcomp
   :replaces_section_title:
   :noindex:

   BioNetComp\: A Python package for biological network comparison from STRING database.

   :homepage: https://github.com/lmigueel/bionetcomp/
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`bionetcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionetcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionetcomp/meta.yaml>`_

   


.. conda:package:: bionetcomp

   |downloads_bionetcomp| |docker_bionetcomp|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends on gseapy: 
   :depends on matplotlib-base: 
   :depends on networkx: ``>=2.5``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on requests: 
   :depends on scipy: ``>=1.6.1``

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

    pixi global install bionetcomp

to add into an existing workspace instead, run::

    pixi add bionetcomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bionetcomp

Alternatively, to install into a new environment, run::

    conda create -n envname bionetcomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bionetcomp:<tag>

(see `bionetcomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bionetcomp| image:: https://img.shields.io/conda/dn/bioconda/bionetcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bionetcomp
   :alt:   (downloads)
.. |docker_bionetcomp| image:: https://quay.io/repository/biocontainers/bionetcomp/status
   :target: https://quay.io/repository/biocontainers/bionetcomp
.. _`bionetcomp/tags`: https://quay.io/repository/biocontainers/bionetcomp?tab=tags


.. raw:: html

    <script>
        var package = "bionetcomp";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bionetcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bionetcomp/README.html