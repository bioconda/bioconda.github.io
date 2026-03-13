:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biomaj'
.. highlight: bash

biomaj
======

.. conda:recipe:: biomaj
   :replaces_section_title:
   :noindex:

   Automates the update cycle and the supervision of the locally mirrored databank repository

   :homepage: http://biomaj.genouest.org
   :license: AGPL / GNU Affero General Public License v3 or later (AGPLv3+)
   :recipe: /`biomaj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biomaj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biomaj/meta.yaml>`_
   :links: biotools: :biotools:`biomaj`, doi: :doi:`10.1093/bioinformatics/btn325`

   


.. conda:package:: biomaj

   |downloads_biomaj| |docker_biomaj|

   :versions:
      
      

      ``3.0.19-0``

      

   
   :depends on bcrypt: 
   :depends on drmaa: 
   :depends on elasticsearch: 
   :depends on future: 
   :depends on ldap3: 
   :depends on pycurl: 
   :depends on pymongo: 
   :depends on python: ``2.7*``
   :depends on tabulate: 

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

    pixi global install biomaj

to add into an existing workspace instead, run::

    pixi add biomaj

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biomaj

Alternatively, to install into a new environment, run::

    conda create -n envname biomaj

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biomaj:<tag>

(see `biomaj/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biomaj| image:: https://img.shields.io/conda/dn/bioconda/biomaj.svg?style=flat
   :target: https://anaconda.org/bioconda/biomaj
   :alt:   (downloads)
.. |docker_biomaj| image:: https://quay.io/repository/biocontainers/biomaj/status
   :target: https://quay.io/repository/biocontainers/biomaj
.. _`biomaj/tags`: https://quay.io/repository/biocontainers/biomaj?tab=tags


.. raw:: html

    <script>
        var package = "biomaj";
        var versions = ["3.0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biomaj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biomaj/README.html